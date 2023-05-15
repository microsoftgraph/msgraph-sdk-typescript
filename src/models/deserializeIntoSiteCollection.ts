import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {Root} from './root';
import {serializeRoot} from './serializeRoot';
import {SiteCollection} from './siteCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSiteCollection(siteCollection: SiteCollection | undefined = {} as SiteCollection) : Record<string, (node: ParseNode) => void> {
    return {
        "dataLocationCode": n => { siteCollection.dataLocationCode = n.getStringValue(); },
        "hostname": n => { siteCollection.hostname = n.getStringValue(); },
        "@odata.type": n => { siteCollection.odataType = n.getStringValue(); },
        "root": n => { siteCollection.root = n.getObjectValue<Root>(createRootFromDiscriminatorValue); },
    }
}
