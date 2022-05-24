import {Alert} from './alert';
import {AlertCollectionResponse} from './alertCollectionResponse';
import {createAlertFromDiscriminatorValue} from './createAlertFromDiscriminatorValue';
import {AlertImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlertCollectionResponseImpl implements AdditionalDataHolder, AlertCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Alert[] | undefined;
    /**
     * Instantiates a new AlertCollectionResponse and sets the default values.
     * @param alertCollectionResponseParameterValue 
     */
    public constructor(alertCollectionResponseParameterValue?: AlertCollectionResponse | undefined) {
        this.additionalData = alertCollectionResponseParameterValue?.additionalData ? alertCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = alertCollectionResponseParameterValue?.nextLink ;
        this.value = alertCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AlertImpl>(createAlertFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AlertImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AlertImpl(element));});
        writer.writeCollectionOfObjectValues<AlertImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
