import {createOpenShiftFromDiscriminatorValue} from './createOpenShiftFromDiscriminatorValue';
import {OpenShiftImpl} from './index';
import {OpenShift} from './openShift';
import {OpenShiftCollectionResponse} from './openShiftCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenShiftCollectionResponseImpl implements AdditionalDataHolder, OpenShiftCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The nextLink property  */
    nextLink?: string | undefined;
    /** The value property  */
    value?: OpenShift[] | undefined;
    /**
     * Instantiates a new OpenShiftCollectionResponse and sets the default values.
     * @param openShiftCollectionResponseParameterValue 
     */
    public constructor(openShiftCollectionResponseParameterValue?: OpenShiftCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = openShiftCollectionResponseParameterValue?.additionalData ? {} : openShiftCollectionResponseParameterValue?.additionalData!
        this.nextLink = openShiftCollectionResponseParameterValue?.nextLink ;
        this.value = openShiftCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OpenShiftImpl>(createOpenShiftFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        if(this.nextLink)
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value){
        const valueArrValue: OpenShiftImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OpenShiftImpl(element));});
        writer.writeCollectionOfObjectValues<OpenShiftImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
