import { deserializeIntoInformationalUrl } from './deserializeIntoInformationalUrl';
import { type InformationalUrl } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInformationalUrlFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInformationalUrl;
}
