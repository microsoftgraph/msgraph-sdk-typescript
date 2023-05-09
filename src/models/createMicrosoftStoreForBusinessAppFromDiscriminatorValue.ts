import {deserializeIntoMicrosoftStoreForBusinessApp} from './deserializeIntoMicrosoftStoreForBusinessApp';
import {MicrosoftStoreForBusinessApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftStoreForBusinessAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftStoreForBusinessApp;
}
