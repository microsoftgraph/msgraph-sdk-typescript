import {MicrosoftStoreForBusinessAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftStoreForBusinessAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftStoreForBusinessAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftStoreForBusinessAppImpl();
}
