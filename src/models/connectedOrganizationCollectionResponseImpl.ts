import {ConnectedOrganization} from './connectedOrganization';
import {ConnectedOrganizationCollectionResponse} from './connectedOrganizationCollectionResponse';
import {createConnectedOrganizationFromDiscriminatorValue} from './createConnectedOrganizationFromDiscriminatorValue';
import {ConnectedOrganizationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConnectedOrganizationCollectionResponseImpl implements AdditionalDataHolder, ConnectedOrganizationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ConnectedOrganization[] | undefined;
    /**
     * Instantiates a new ConnectedOrganizationCollectionResponse and sets the default values.
     * @param connectedOrganizationCollectionResponseParameterValue 
     */
    public constructor(connectedOrganizationCollectionResponseParameterValue?: ConnectedOrganizationCollectionResponse | undefined) {
        this.additionalData = connectedOrganizationCollectionResponseParameterValue?.additionalData ? connectedOrganizationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = connectedOrganizationCollectionResponseParameterValue?.nextLink ;
        this.value = connectedOrganizationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ConnectedOrganizationImpl>(createConnectedOrganizationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ConnectedOrganizationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ConnectedOrganizationImpl(element));});
        writer.writeCollectionOfObjectValues<ConnectedOrganizationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
