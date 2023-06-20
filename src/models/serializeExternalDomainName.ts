import {ExternalDomainName} from './externalDomainName';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalDomainName(externalDomainName: ExternalDomainName | undefined = {} as ExternalDomainName, writer: SerializationWriter) : void {
        serializeEntity(writer, externalDomainName)
}
