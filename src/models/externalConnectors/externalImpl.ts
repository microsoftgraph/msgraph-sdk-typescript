import {createExternalConnectionFromDiscriminatorValue} from './createExternalConnectionFromDiscriminatorValue';
import {External} from './external';
import {ExternalConnection} from './externalConnection';
import {ExternalConnectionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalImpl implements External {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The connections property */
    private _connections?: ExternalConnection[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the connections property value. The connections property
     * @returns a ExternalConnectionInterface
     */
    public get connections() {
        return this._connections;
    };
    /**
     * Sets the connections property value. The connections property
     * @param value Value to set for the connections property.
     */
    public set connections(value: ExternalConnection[] | undefined) {
        if(value) {
            const connectionsArrValue: ExternalConnectionImpl[] = [];
            this.connections?.forEach(element => {
                connectionsArrValue.push((element instanceof ExternalConnectionImpl? element:new ExternalConnectionImpl(element)));
            });
            this._connections = connectionsArrValue;
        }
    };
    /**
     * Instantiates a new External and sets the default values.
     * @param externalParameterValue 
     */
    public constructor(externalParameterValue?: External | undefined) {
        this._additionalData = externalParameterValue?.additionalData ? externalParameterValue?.additionalData! : {};
        this._connections = externalParameterValue?.connections;
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
        if(this.connections && this.connections.length != 0){        const connectionsArrValue: ExternalConnectionImpl[] = [];
        this.connections?.forEach(element => {
            connectionsArrValue.push((element instanceof ExternalConnectionImpl? element:new ExternalConnectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExternalConnectionImpl>("connections", connectionsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
