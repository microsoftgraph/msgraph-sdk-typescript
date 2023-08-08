import {serializeSubjectSet} from './serializeSubjectSet';
import type {SingleServicePrincipal} from './singleServicePrincipal';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSingleServicePrincipal(writer: SerializationWriter, singleServicePrincipal: SingleServicePrincipal | undefined = {} as SingleServicePrincipal) : void {
        serializeSubjectSet(writer, singleServicePrincipal)
        writer.writeStringValue("description", singleServicePrincipal.description);
        writer.writeStringValue("servicePrincipalId", singleServicePrincipal.servicePrincipalId);
}
