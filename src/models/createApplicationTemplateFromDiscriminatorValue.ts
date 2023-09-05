import { deserializeIntoApplicationTemplate } from './deserializeIntoApplicationTemplate';
import { type ApplicationTemplate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplicationTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplicationTemplate;
}
