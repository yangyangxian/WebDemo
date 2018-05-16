import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as marked from 'marked'

interface BlogState {
    previewContent: string
}

export class Blog extends React.Component<RouteComponentProps<{}>, BlogState> {
    constructor() {
        super();
        this.state = {
            previewContent: ''
        };        
    }

    public render() {

        const previewContent = this.state.previewContent;

        return <div>
            <header key='header'>
                <textarea type="text" placeholder="输入文章标题..." onInput={e => { this.onContentChange(e) }}/>
            </header>,
            <div key='main'>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: previewContent }} />
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    }

    onContentChange(e: React.FormEvent<HTMLTextAreaElement>) {
        console.log(e.currentTarget.value)
        this.setState({
            previewContent: marked(e.currentTarget.value, { breaks: true })
        })
    }
}
