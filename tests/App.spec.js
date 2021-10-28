/**
 * @jest-environment jsdom
 */
import App from '../src/pages/Main'
import React from 'react';
import { render, fireEvent, screen, waitForElementToBeRemoved, act, cleanup } from '@testing-library/react';
import data from '../src/data'
import {toBeInTheDocument} from '@testing-library/jest-dom/extend-expect';

const pause = jest
  .spyOn(window.HTMLMediaElement.prototype, 'pause')
  .mockImplementation(() => {})

const play = jest
    .spyOn(window.HTMLMediaElement.prototype, 'play')
    .mockImplementation(() => {})

const audioRef = { current :{ play: () => {} } }
jest.spyOn(audioRef.current, 'play')

describe('test player', () => {
    afterEach(() => {
        cleanup()
    })
    it('test forward back button', () => {
        render(<App />)
        //checking render for landing page, first song showed
        for(let i=0; i<data().length; i++) {
            const song = data()[i].name
            const artist = data()[i].artist
            const src = data()[i].cover
    
            expect(screen.getByTestId('song-name')).toHaveTextContent(song);
            expect(screen.getByTestId('artist-name')).toHaveTextContent(artist);
            expect(screen.getByTestId('cover')).toHaveAttribute('src', src)
    
            fireEvent.click(screen.getByTestId('skip-forward'));
        }
        for(let i= data().length-1 ; i > -1; i--) {
            fireEvent.click(screen.getByTestId('skip-back'));
            const song = data()[i].name
            const artist = data()[i].artist
            const src = data()[i].cover
    
            expect(screen.getByTestId('song-name')).toHaveTextContent(song);
            expect(screen.getByTestId('artist-name')).toHaveTextContent(artist);
            expect(screen.getByTestId('cover')).toHaveAttribute('src', src)
        }
    })

    it('test drag time', () => {
        render(<App />)

        //Changing value of time slider, checking the player timer 
        let num = 40
        let time = Math.floor(num / 60) + ":" + ("0" + Math.floor(num % 60)).slice(-2);
        fireEvent.change(screen.getByTestId('input'), { target: { num,  valueAsNumber: num, } });
        expect(screen.getByTestId('time')).toHaveTextContent(time);

        num =0 
        expect(screen.getByTestId('time')).toHaveTextContent(time);
    })

    it('test play button', () => {
        render( <App />)

        //Testing window.HTMLMediaElement.prototype.play called
        fireEvent.click(screen.getByTestId('play'));
        expect(play).toHaveBeenCalled()

        //Testing window.HTMLMediaElement.prototype.pause called
        fireEvent.click(screen.getByTestId('play'));
        expect(pause).toHaveBeenCalled()
    })

    describe('test click library', () => {
        it('click the second song', () => {
            render( <App />)
            // Click the second song on left panel and check the song in player
            let song = data()[1].name
            fireEvent.click(screen.getByTestId('libraryBtn'));
            fireEvent.click(screen.getByText(song));
            expect(screen.getByTestId('song-name')).toHaveTextContent(song);  
        })
        it('click the third song', () => {
            render( <App />)
            // Click the third song 
            let song = data()[2].name
            fireEvent.click(screen.getByTestId('libraryBtn'));
            fireEvent.click(screen.getByText(song));
            expect(screen.getByTestId('song-name')).toHaveTextContent(song);  
        })
    })
})

