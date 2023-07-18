import {Label} from './label';
import {Property} from './property';
import {PropertyType} from './propertyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProperty(property: Property | undefined = {} as Property) : Record<string, (node: ParseNode) => void> {
    return {
        "aliases": n => { property.aliases = n.getCollectionOfPrimitiveValues<string>(); },
        "isQueryable": n => { property.isQueryable = n.getBooleanValue(); },
        "isRefinable": n => { property.isRefinable = n.getBooleanValue(); },
        "isRetrievable": n => { property.isRetrievable = n.getBooleanValue(); },
        "isSearchable": n => { property.isSearchable = n.getBooleanValue(); },
        "labels": n => { property.labels = n.getCollectionOfEnumValues<Label>(Label); },
        "name": n => { property.name = n.getStringValue(); },
        "@odata.type": n => { property.odataType = n.getStringValue(); },
        "type": n => { property.type = n.getEnumValue<PropertyType>(PropertyType); },
    }
}
