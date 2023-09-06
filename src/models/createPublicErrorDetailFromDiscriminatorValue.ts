import { deserializeIntoPublicErrorDetail } from './deserializeIntoPublicErrorDetail';
import { type PublicErrorDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPublicErrorDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPublicErrorDetail;
}
