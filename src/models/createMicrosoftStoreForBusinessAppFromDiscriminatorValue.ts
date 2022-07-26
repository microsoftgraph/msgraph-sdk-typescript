import {MicrosoftStoreForBusinessApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftStoreForBusinessAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftStoreForBusinessApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftStoreForBusinessApp();
}
