import {deserializeIntoExternalActivityResult} from './deserializeIntoExternalActivityResult';
import {ExternalActivityResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalActivityResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalActivityResult;
}
