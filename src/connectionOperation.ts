import {Entity} from './entity';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class ConnectionOperation extends Entity implements Parsable {
    private _error?: PublicError | undefined;
    private _status?: ConnectionOperationStatus | undefined;
    /**
     * Instantiates a new connectionOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the error property value. 
     * @returns a publicError
     */
    public get error() {
        return this._error;
    };
    /**
     * Gets the status property value. 
     * @returns a connectionOperationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["error", (o, n) => { (o as unknown as ConnectionOperation).error = n.getObjectValue<PublicError>(PublicError); }],
            ["status", (o, n) => { (o as unknown as ConnectionOperation).status = n.getObjectValue<ConnectionOperationStatus>(ConnectionOperationStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PublicError>("error", this.error);
        writer.writeObjectValue<ConnectionOperationStatus>("status", this.status);
    };
    /**
     * Sets the error property value. 
     * @param value Value to set for the error property.
     */
    public set error(value: PublicError | undefined) {
        this._error = value;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: ConnectionOperationStatus | undefined) {
        this._status = value;
    };
}
