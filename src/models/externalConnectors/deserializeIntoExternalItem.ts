import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type Acl } from './acl';
import { createAclFromDiscriminatorValue } from './createAclFromDiscriminatorValue';
import { createExternalActivityFromDiscriminatorValue } from './createExternalActivityFromDiscriminatorValue';
import { createExternalItemContentFromDiscriminatorValue } from './createExternalItemContentFromDiscriminatorValue';
import { createPropertiesFromDiscriminatorValue } from './createPropertiesFromDiscriminatorValue';
import { type ExternalActivity } from './externalActivity';
import { type ExternalItem } from './externalItem';
import { type ExternalItemContent } from './externalItemContent';
import { type Properties } from './properties';
import { serializeAcl } from './serializeAcl';
import { serializeExternalActivity } from './serializeExternalActivity';
import { serializeExternalItemContent } from './serializeExternalItemContent';
import { serializeProperties } from './serializeProperties';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalItem(externalItem: ExternalItem | undefined = {} as ExternalItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalItem),
        "acl": n => { externalItem.acl = n.getCollectionOfObjectValues<Acl>(createAclFromDiscriminatorValue); },
        "activities": n => { externalItem.activities = n.getCollectionOfObjectValues<ExternalActivity>(createExternalActivityFromDiscriminatorValue); },
        "content": n => { externalItem.content = n.getObjectValue<ExternalItemContent>(createExternalItemContentFromDiscriminatorValue); },
        "properties": n => { externalItem.properties = n.getObjectValue<Properties>(createPropertiesFromDiscriminatorValue); },
    }
}
