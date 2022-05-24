import {createOpenShiftChangeRequestFromDiscriminatorValue} from './createOpenShiftChangeRequestFromDiscriminatorValue';
import {OpenShiftChangeRequestImpl} from './index';
import {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {OpenShiftChangeRequestCollectionResponse} from './openShiftChangeRequestCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenShiftChangeRequestCollectionResponseImpl implements AdditionalDataHolder, OpenShiftChangeRequestCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: OpenShiftChangeRequest[] | undefined;
    /**
     * Instantiates a new OpenShiftChangeRequestCollectionResponse and sets the default values.
     * @param openShiftChangeRequestCollectionResponseParameterValue 
     */
    public constructor(openShiftChangeRequestCollectionResponseParameterValue?: OpenShiftChangeRequestCollectionResponse | undefined) {
        this.additionalData = openShiftChangeRequestCollectionResponseParameterValue?.additionalData ? openShiftChangeRequestCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = openShiftChangeRequestCollectionResponseParameterValue?.nextLink ;
        this.value = openShiftChangeRequestCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OpenShiftChangeRequestImpl>(createOpenShiftChangeRequestFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: OpenShiftChangeRequestImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OpenShiftChangeRequestImpl(element));});
        writer.writeCollectionOfObjectValues<OpenShiftChangeRequestImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
