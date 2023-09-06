import { deserializeIntoInternetMessageHeader } from './deserializeIntoInternetMessageHeader';
import { type InternetMessageHeader } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInternetMessageHeaderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInternetMessageHeader;
}
