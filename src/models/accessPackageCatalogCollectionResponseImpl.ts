import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageCatalogCollectionResponse} from './accessPackageCatalogCollectionResponse';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {AccessPackageCatalogImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageCatalogCollectionResponseImpl implements AccessPackageCatalogCollectionResponse, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AccessPackageCatalog[] | undefined;
    /**
     * Instantiates a new AccessPackageCatalogCollectionResponse and sets the default values.
     * @param accessPackageCatalogCollectionResponseParameterValue 
     */
    public constructor(accessPackageCatalogCollectionResponseParameterValue?: AccessPackageCatalogCollectionResponse | undefined) {
        this.additionalData = accessPackageCatalogCollectionResponseParameterValue?.additionalData ? accessPackageCatalogCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = accessPackageCatalogCollectionResponseParameterValue?.nextLink ;
        this.value = accessPackageCatalogCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessPackageCatalogImpl>(createAccessPackageCatalogFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: AccessPackageCatalogImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AccessPackageCatalogImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageCatalogImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
