/// <reference types="react" />
import { OutputData } from '@editorjs/editorjs';
export interface EditorTSProps {
    options?: {
        placeholder?: string;
        data?: OutputData;
        image?: {
            field?: string;
            endpoints: {
                byFile?: string;
                byUrl?: string;
            };
        };
    };
    onSave: (data: OutputData) => void;
}
export declare const EditorTS: React.FC<EditorTSProps>;
export default EditorTS;
