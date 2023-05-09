import {deserializeIntoDisplayTemplate} from './deserializeIntoDisplayTemplate';
import {DisplayTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDisplayTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDisplayTemplate;
}
