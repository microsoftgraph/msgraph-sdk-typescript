import {deserializeIntoPublicErrorDetail} from './deserializeIntoPublicErrorDetail';
import {PublicErrorDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicErrorDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPublicErrorDetail;
}
