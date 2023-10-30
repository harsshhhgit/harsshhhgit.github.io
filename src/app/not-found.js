'use client'
import Link from 'next/link'

const Error = () => {
    return (
        <>
            <pre className='one-dark-pro rounded p-4 max-w-screen-sm leading-6' style={{ backgroundColor: '#111111' }}>
                <code className="code-highlight">
                    <span className="code-line">
                        <span>
                            <span style={{ color: '#7f848e', fontStyle: 'italic' }}>
                                &#47;&#47; 404 page not found
                            </span>
                        </span>
                    </span><br />
                    <span className="code-line">
                        <span>
                            <span style={{ color: '#c678dd' }}>function</span>
                            <span style={{ color: '#abb2bf' }}>{' '}</span>
                            <span style={{ color: '#61afef' }}>launch</span>
                            <span style={{ color: '#abb2bf' }}>()&nbsp;&#123;</span>
                        </span>
                    </span><br />
                    <span className="code-line">
                        <span>
                            <span style={{ color: '#abb2bf' }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span style={{ color: '#c678dd' }}>if</span>
                            <span style={{ color: '#abb2bf' }}>(</span>
                            <span style={{ color: '#e06c75' }}>inDevelopment</span>
                            <span style={{ color: '#abb2bf' }}>)&nbsp;&#123;</span>
                        </span>
                    </span><br />
                    <span className="code-line">
                        <span>
                            <span style={{ color: '#abb2bf' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span style={{ color: '#c678dd' }}>throw</span>
                            <span style={{ color: '#abb2bf' }}>{' '}</span>
                            <span style={{ color: '#e06c75' }}>&quot;</span>
                            <span style={{ color: '#e06c75' }}>fuck</span>
                            <span style={{ color: '#abb2bf' }}> </span>
                            <span style={{ color: '#e06c75' }}>off</span>
                            <span style={{ color: '#abb2bf' }}> </span>
                            <span style={{ color: '#e06c75' }}>bitch</span>
                            <span style={{ color: '#e06c75' }}>!!!</span>
                            <span style={{ color: '#e06c75' }}>&quot;</span>
                        </span>
                    </span><br />
                    <span className="code-line">
                        <span data-line="">
                            <span style={{ color: '#abb2bf' }}>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
                        </span>
                    </span><br />
                    <span className="code-line">
                        <span data-line="">
                        </span><span style={{ color: '#abb2bf' }}>&#125;</span>
                    </span><br/>
                    <span className="code-line">
                        <span data-line="">
                            <span style={{ color: '#7f848e', fontStyle: 'italic' }}>&#47;&#47; Go <Link className='transition-all hover:underline hover:text-neutral-100' href={'/'}>Home!</Link></span>
                        </span>
                    </span>
                </code >
            </pre >
            {/* <pre className="one-dark-pro" data-language="js" data-theme="default" style="background-color:#282c34" tabindex="0"> */}
            {/* <code className="code-highlight">
                    <span className="code-line"><span data-line=""><span style={{color: '#abb2bf'}}>        </span><span style="color:#c678dd">throw</span><span style={{color: '#abb2bf'}}> </span><span style="color:#56b6c2">&amp;</span><span style={{color: '#e06c75'}}>quot</span><span style={{color: '#abb2bf'}}>;</span><span style={{color: '#e06c75'}}>fuck</span><span style={{color: '#abb2bf'}}> </span><span style={{color: '#e06c75'}}>off</span><span style={{color: '#abb2bf'}}> </span><span style={{color: '#e06c75'}}>bitch</span><span style="color:#56b6c2">!!!&amp;</span><span style={{color: '#e06c75'}}>quot</span><span style={{color: '#abb2bf'}}>;;</span></span>
                    </span><span className="code-line"><span data-line=""><span style={{color: '#abb2bf'}}>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span></span>
                    </span><span className="code-line"><span data-line=""><span style={{color: '#abb2bf'}}>&#125;</span></span>
                    <span className="code-line"><span data-line=""><span style="color:#7f848e;font-style:italic">// Go Home!</span></span></span>
                    </code> */}
            {/* </pre > */}
        </>
    )
}

export default Error