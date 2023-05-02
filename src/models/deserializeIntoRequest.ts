import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {Request} from './request';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRequest(request: Request | undefined = {} as Request) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(request),
        "approvalId": n => { request.approvalId = n.getStringValue(); },
        "completedDateTime": n => { request.completedDateTime = n.getDateValue(); },
        "createdBy": n => { request.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { request.createdDateTime = n.getDateValue(); },
        "customData": n => { request.customData = n.getStringValue(); },
        "status": n => { request.status = n.getStringValue(); },
    }
}
