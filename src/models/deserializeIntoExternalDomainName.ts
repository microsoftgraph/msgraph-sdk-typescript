import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ExternalDomainName } from './externalDomainName';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalDomainName(externalDomainName: ExternalDomainName | undefined = {} as ExternalDomainName) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalDomainName),
    }
}
