export class Mail
{
    to: string

    subject: string

    text?: string

    html?: string

    constructor(props: Mail)
    {
        Object.assign(this, props)
    }
}
