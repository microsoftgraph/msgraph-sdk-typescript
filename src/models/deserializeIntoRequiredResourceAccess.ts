import {createResourceAccessFromDiscriminatorValue} from './createResourceAccessFromDiscriminatorValue';
import {RequiredResourceAccess} from './requiredResourceAccess';
import {ResourceAccess} from './resourceAccess';
import {serializeResourceAccess} from './serializeResourceAccess';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRequiredResourceAccess(requiredResourceAccess: RequiredResourceAccess | undefined = {} as RequiredResourceAccess) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { requiredResourceAccess.odataType = n.getStringValue(); },
        "resourceAccess": n => { requiredResourceAccess.resourceAccess = n.getCollectionOfObjectValues<ResourceAccess>(createResourceAccessFromDiscriminatorValue); },
        "resourceAppId": n => { requiredResourceAccess.resourceAppId = n.getStringValue(); },
    }
}
