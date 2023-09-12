import { createResourceAccessFromDiscriminatorValue } from './createResourceAccessFromDiscriminatorValue';
import { type RequiredResourceAccess } from './requiredResourceAccess';
import { type ResourceAccess } from './resourceAccess';
import { serializeResourceAccess } from './serializeResourceAccess';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRequiredResourceAccess(requiredResourceAccess: RequiredResourceAccess | undefined = {} as RequiredResourceAccess) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { requiredResourceAccess.odataType = n.getStringValue(); },
        "resourceAccess": n => { requiredResourceAccess.resourceAccess = n.getCollectionOfObjectValues<ResourceAccess>(createResourceAccessFromDiscriminatorValue); },
        "resourceAppId": n => { requiredResourceAccess.resourceAppId = n.getStringValue(); },
    }
}
