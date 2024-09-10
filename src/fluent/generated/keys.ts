import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '0f36a0f88722488c987dcf657a5d2b75'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '014e8734118c4b9a8138cb6d914c3b80'
                    }
                }
            }
        }
    }
}
