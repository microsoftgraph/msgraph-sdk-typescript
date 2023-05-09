import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {SingleServicePrincipal} from './singleServicePrincipal';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSingleServicePrincipal(singleServicePrincipal: SingleServicePrincipal | undefined = {} as SingleServicePrincipal) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(singleServicePrincipal),
        "description": n => { singleServicePrincipal.description = n.getStringValue(); },
        "servicePrincipalId": n => { singleServicePrincipal.servicePrincipalId = n.getStringValue(); },
    }
}
