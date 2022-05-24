import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from './createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {ResourceSpecificPermissionGrantImpl} from './index';
import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {ResourceSpecificPermissionGrantCollectionResponse} from './resourceSpecificPermissionGrantCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceSpecificPermissionGrantCollectionResponseImpl implements AdditionalDataHolder, Parsable, ResourceSpecificPermissionGrantCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ResourceSpecificPermissionGrant[] | undefined;
    /**
     * Instantiates a new ResourceSpecificPermissionGrantCollectionResponse and sets the default values.
     * @param resourceSpecificPermissionGrantCollectionResponseParameterValue 
     */
    public constructor(resourceSpecificPermissionGrantCollectionResponseParameterValue?: ResourceSpecificPermissionGrantCollectionResponse | undefined) {
        this.additionalData = resourceSpecificPermissionGrantCollectionResponseParameterValue?.additionalData ? resourceSpecificPermissionGrantCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = resourceSpecificPermissionGrantCollectionResponseParameterValue?.nextLink ;
        this.value = resourceSpecificPermissionGrantCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrantImpl>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ResourceSpecificPermissionGrantImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ResourceSpecificPermissionGrantImpl(element));});
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrantImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
