import { deserializeIntoDisplayTemplate } from './deserializeIntoDisplayTemplate';
import { type DisplayTemplate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDisplayTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDisplayTemplate;
}
