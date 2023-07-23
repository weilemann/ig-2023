export interface IContent {
    type: 'paragraph' | 'link',
    content: string;
    url?: string;
}