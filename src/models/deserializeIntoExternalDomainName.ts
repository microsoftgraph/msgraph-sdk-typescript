import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ExternalDomainName} from './externalDomainName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalDomainName(externalDomainName: ExternalDomainName | undefined = {} as ExternalDomainName) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalDomainName),
    }
}
