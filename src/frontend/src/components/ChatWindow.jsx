import { Button, Navbar, Input, Join, ChatBubble } from 'react-daisyui';

function ChatWindow() {
    return (
        <div style={{ margin: 250, marginTop: 0, zIndex: 1 }}>
            <div>
                <Navbar>
                    <Navbar.Center style={{ alignItems: 'center' }}>
                        <Button tag="a" color="ghost" className="normal-case text-xl">
                            Hello World
                        </Button>
                    </Navbar.Center>
                </Navbar>
            </div>
            <div className='chats'>
                <ChatBubble>
                    <ChatBubble.Message>
                        received message
                    </ChatBubble.Message>
                </ChatBubble>

                <ChatBubble end>
                    <ChatBubble.Message color='primary'>
                        sent message
                    </ChatBubble.Message>
                </ChatBubble>
            </div>
            <div>
                <div style={{ position: 'fixed', bottom: 5, left: 0, right: 0 }}>
                    <Join>
                        <Input style={{ width: 1000, marginLeft: 250, marginLeft: 260 }} placeholder='Send a message' className='join-item' />
                        <Button className='join-item rounded-s' color='success'>
                            <svg className='h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'square', strokeLinejoin: 'round' }}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </Button>
                    </Join>
                </div>
            </div>
        </div>
    )
}

export default ChatWindow