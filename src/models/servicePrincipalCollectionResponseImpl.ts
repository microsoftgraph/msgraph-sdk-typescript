import {createServicePrincipalFromDiscriminatorValue} from './createServicePrincipalFromDiscriminatorValue';
import {ServicePrincipalImpl} from './index';
import {ServicePrincipal} from './servicePrincipal';
import {ServicePrincipalCollectionResponse} from './servicePrincipalCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServicePrincipalCollectionResponseImpl implements AdditionalDataHolder, Parsable, ServicePrincipalCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ServicePrincipal[] | undefined;
    /**
     * Instantiates a new ServicePrincipalCollectionResponse and sets the default values.
     * @param servicePrincipalCollectionResponseParameterValue 
     */
    public constructor(servicePrincipalCollectionResponseParameterValue?: ServicePrincipalCollectionResponse | undefined) {
        this.additionalData = servicePrincipalCollectionResponseParameterValue?.additionalData ? servicePrincipalCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = servicePrincipalCollectionResponseParameterValue?.nextLink ;
        this.value = servicePrincipalCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ServicePrincipalImpl>(createServicePrincipalFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ServicePrincipalImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ServicePrincipalImpl(element));});
        writer.writeCollectionOfObjectValues<ServicePrincipalImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
