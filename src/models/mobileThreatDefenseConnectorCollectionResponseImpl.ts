import {createMobileThreatDefenseConnectorFromDiscriminatorValue} from './createMobileThreatDefenseConnectorFromDiscriminatorValue';
import {MobileThreatDefenseConnectorImpl} from './index';
import {MobileThreatDefenseConnector} from './mobileThreatDefenseConnector';
import {MobileThreatDefenseConnectorCollectionResponse} from './mobileThreatDefenseConnectorCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileThreatDefenseConnectorCollectionResponseImpl implements AdditionalDataHolder, MobileThreatDefenseConnectorCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: MobileThreatDefenseConnector[] | undefined;
    /**
     * Instantiates a new MobileThreatDefenseConnectorCollectionResponse and sets the default values.
     * @param mobileThreatDefenseConnectorCollectionResponseParameterValue 
     */
    public constructor(mobileThreatDefenseConnectorCollectionResponseParameterValue?: MobileThreatDefenseConnectorCollectionResponse | undefined) {
        this.additionalData = mobileThreatDefenseConnectorCollectionResponseParameterValue?.additionalData ? mobileThreatDefenseConnectorCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = mobileThreatDefenseConnectorCollectionResponseParameterValue?.nextLink ;
        this.value = mobileThreatDefenseConnectorCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<MobileThreatDefenseConnectorImpl>(createMobileThreatDefenseConnectorFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: MobileThreatDefenseConnectorImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new MobileThreatDefenseConnectorImpl(element));});
        writer.writeCollectionOfObjectValues<MobileThreatDefenseConnectorImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
