import {Entity} from './entity';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class WorkbookOperation extends Entity implements Parsable {
    /** The error returned by the operation.  */
    private _error?: WorkbookOperationError | undefined;
    /** The resource URI for the result.  */
    private _resourceLocation?: string | undefined;
    /** The current status of the operation. Possible values are: notStarted, running, succeeded, failed.  */
    private _status?: WorkbookOperationStatus | undefined;
    /**
     * Instantiates a new workbookOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the error property value. The error returned by the operation.
     * @returns a workbookOperationError
     */
    public get error() {
        return this._error;
    };
    /**
     * Gets the resourceLocation property value. The resource URI for the result.
     * @returns a string
     */
    public get resourceLocation() {
        return this._resourceLocation;
    };
    /**
     * Gets the status property value. The current status of the operation. Possible values are: notStarted, running, succeeded, failed.
     * @returns a workbookOperationStatus
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
            ["error", (o, n) => { (o as unknown as WorkbookOperation).error = n.getObjectValue<WorkbookOperationError>(WorkbookOperationError); }],
            ["resourceLocation", (o, n) => { (o as unknown as WorkbookOperation).resourceLocation = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as WorkbookOperation).status = n.getObjectValue<WorkbookOperationStatus>(WorkbookOperationStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookOperationError>("error", this.error);
        writer.writeStringValue("resourceLocation", this.resourceLocation);
        writer.writeObjectValue<WorkbookOperationStatus>("status", this.status);
    };
    /**
     * Sets the error property value. The error returned by the operation.
     * @param value Value to set for the error property.
     */
    public set error(value: WorkbookOperationError | undefined) {
        this._error = value;
    };
    /**
     * Sets the resourceLocation property value. The resource URI for the result.
     * @param value Value to set for the resourceLocation property.
     */
    public set resourceLocation(value: string | undefined) {
        this._resourceLocation = value;
    };
    /**
     * Sets the status property value. The current status of the operation. Possible values are: notStarted, running, succeeded, failed.
     * @param value Value to set for the status property.
     */
    public set status(value: WorkbookOperationStatus | undefined) {
        this._status = value;
    };
}
