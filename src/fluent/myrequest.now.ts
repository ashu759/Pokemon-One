import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_snc_pokemon_my_requests = Table({
    name: 'x_snc_pokemon_my_requests',
    label: 'My Requests',
    extends: 'task',
    schema: {
        status: StringColumn({ label: 'Status', mandatory: true, maxLength: 40 }),
    },
    actions: ['read', 'update', 'create'],
})
