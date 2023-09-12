import { type ExternalDomainName } from './externalDomainName';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternalDomainName(writer: SerializationWriter, externalDomainName: ExternalDomainName | undefined = {} as ExternalDomainName) : void {
        serializeEntity(writer, externalDomainName)
}
