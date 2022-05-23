import {createExternalConnectionFromDiscriminatorValue} from './createExternalConnectionFromDiscriminatorValue';
import {External} from './external';
import {ExternalConnection} from './externalConnection';
import {ExternalConnectionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalImpl implements AdditionalDataHolder, External, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The connections property */
    public connections?: ExternalConnection[] | undefined;
    /**
     * Instantiates a new External and sets the default values.
     * @param externalParameterValue 
     */
    public constructor(externalParameterValue?: External | undefined) {
        this.additionalData = externalParameterValue?.additionalData ? externalParameterValue?.additionalData! : {}
        this.connections = externalParameterValue?.connections ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "connections": n => { this.connections = n.getCollectionOfObjectValues<ExternalConnectionImpl>(createExternalConnectionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.connections && this.connections.length != 0){        const connectionsArrValue: ExternalConnectionImpl[] = []; this.connections?.forEach(element => {connectionsArrValue.push(new ExternalConnectionImpl(element));});
        writer.writeCollectionOfObjectValues<ExternalConnectionImpl>("connections", connectionsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
