import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {Acl} from './acl';
import {createAclFromDiscriminatorValue} from './createAclFromDiscriminatorValue';
import {createExternalItemContentFromDiscriminatorValue} from './createExternalItemContentFromDiscriminatorValue';
import {createPropertiesFromDiscriminatorValue} from './createPropertiesFromDiscriminatorValue';
import {ExternalItem} from './externalItem';
import {ExternalItemContent} from './externalItemContent';
import {Properties} from './properties';
import {serializeAcl} from './serializeAcl';
import {serializeExternalItemContent} from './serializeExternalItemContent';
import {serializeProperties} from './serializeProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalItem(externalItem: ExternalItem | undefined = {} as ExternalItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalItem),
        "acl": n => { externalItem.acl = n.getCollectionOfObjectValues<Acl>(createAclFromDiscriminatorValue); },
        "content": n => { externalItem.content = n.getObjectValue<ExternalItemContent>(createExternalItemContentFromDiscriminatorValue); },
        "properties": n => { externalItem.properties = n.getObjectValue<Properties>(createPropertiesFromDiscriminatorValue); },
    }
}
