import {http, HttpResponse } from 'msw';

export const handlers = [
    http.post('http://localhost:3030/auth', () => {
        return HttpResponse.json({
            user: {
                id: 'adads',
                name: "heeheheh"
            }
        })
    })
]