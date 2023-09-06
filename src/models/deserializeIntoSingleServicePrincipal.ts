import { deserializeIntoSubjectSet } from './deserializeIntoSubjectSet';
import { type SingleServicePrincipal } from './singleServicePrincipal';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSingleServicePrincipal(singleServicePrincipal: SingleServicePrincipal | undefined = {} as SingleServicePrincipal) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(singleServicePrincipal),
        "description": n => { singleServicePrincipal.description = n.getStringValue(); },
        "servicePrincipalId": n => { singleServicePrincipal.servicePrincipalId = n.getStringValue(); },
    }
}
