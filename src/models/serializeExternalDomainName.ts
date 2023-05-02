import {ExternalDomainName} from './externalDomainName';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalDomainName(writer: SerializationWriter, externalDomainName: ExternalDomainName | undefined = {} as ExternalDomainName) : void {
        serializeEntity(writer, externalDomainName)
}
