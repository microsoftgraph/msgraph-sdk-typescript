import {createVppTokenFromDiscriminatorValue} from './createVppTokenFromDiscriminatorValue';
import {VppTokenImpl} from './index';
import {VppToken} from './vppToken';
import {VppTokenCollectionResponse} from './vppTokenCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VppTokenCollectionResponseImpl implements AdditionalDataHolder, Parsable, VppTokenCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: VppToken[] | undefined;
    /**
     * Instantiates a new VppTokenCollectionResponse and sets the default values.
     * @param vppTokenCollectionResponseParameterValue 
     */
    public constructor(vppTokenCollectionResponseParameterValue?: VppTokenCollectionResponse | undefined) {
        this.additionalData = vppTokenCollectionResponseParameterValue?.additionalData ? vppTokenCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = vppTokenCollectionResponseParameterValue?.nextLink ;
        this.value = vppTokenCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<VppTokenImpl>(createVppTokenFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: VppTokenImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new VppTokenImpl(element));});
        writer.writeCollectionOfObjectValues<VppTokenImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
