import {createStoragePlanInformationFromDiscriminatorValue} from './createStoragePlanInformationFromDiscriminatorValue';
import {StoragePlanInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Quota implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Total space consumed by files in the recycle bin, in bytes. Read-only.  */
    private _deleted?: number | undefined;
    /** Total space remaining before reaching the quota limit, in bytes. Read-only.  */
    private _remaining?: number | undefined;
    /** Enumeration value that indicates the state of the storage space. Read-only.  */
    private _state?: string | undefined;
    /** Information about the drive's storage quota plans. Only in Personal OneDrive.  */
    private _storagePlanInformation?: StoragePlanInformation | undefined;
    /** Total allowed storage space, in bytes. Read-only.  */
    private _total?: number | undefined;
    /** Total space used, in bytes. Read-only.  */
    private _used?: number | undefined;
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new quota and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the deleted property value. Total space consumed by files in the recycle bin, in bytes. Read-only.
     * @returns a int64
     */
    public get deleted() {
        return this._deleted;
    };
    /**
     * Sets the deleted property value. Total space consumed by files in the recycle bin, in bytes. Read-only.
     * @param value Value to set for the deleted property.
     */
    public set deleted(value: number | undefined) {
        this._deleted = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deleted": n => { this.deleted = n.getNumberValue(); },
            "remaining": n => { this.remaining = n.getNumberValue(); },
            "state": n => { this.state = n.getStringValue(); },
            "storagePlanInformation": n => { this.storagePlanInformation = n.getObjectValue<StoragePlanInformation>(createStoragePlanInformationFromDiscriminatorValue); },
            "total": n => { this.total = n.getNumberValue(); },
            "used": n => { this.used = n.getNumberValue(); },
        };
    };
    /**
     * Gets the remaining property value. Total space remaining before reaching the quota limit, in bytes. Read-only.
     * @returns a int64
     */
    public get remaining() {
        return this._remaining;
    };
    /**
     * Sets the remaining property value. Total space remaining before reaching the quota limit, in bytes. Read-only.
     * @param value Value to set for the remaining property.
     */
    public set remaining(value: number | undefined) {
        this._remaining = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("deleted", this.deleted);
        writer.writeNumberValue("remaining", this.remaining);
        writer.writeStringValue("state", this.state);
        writer.writeObjectValue<StoragePlanInformation>("storagePlanInformation", this.storagePlanInformation);
        writer.writeNumberValue("total", this.total);
        writer.writeNumberValue("used", this.used);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. Enumeration value that indicates the state of the storage space. Read-only.
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Enumeration value that indicates the state of the storage space. Read-only.
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
    /**
     * Gets the storagePlanInformation property value. Information about the drive's storage quota plans. Only in Personal OneDrive.
     * @returns a storagePlanInformation
     */
    public get storagePlanInformation() {
        return this._storagePlanInformation;
    };
    /**
     * Sets the storagePlanInformation property value. Information about the drive's storage quota plans. Only in Personal OneDrive.
     * @param value Value to set for the storagePlanInformation property.
     */
    public set storagePlanInformation(value: StoragePlanInformation | undefined) {
        this._storagePlanInformation = value;
    };
    /**
     * Gets the total property value. Total allowed storage space, in bytes. Read-only.
     * @returns a int64
     */
    public get total() {
        return this._total;
    };
    /**
     * Sets the total property value. Total allowed storage space, in bytes. Read-only.
     * @param value Value to set for the total property.
     */
    public set total(value: number | undefined) {
        this._total = value;
    };
    /**
     * Gets the used property value. Total space used, in bytes. Read-only.
     * @returns a int64
     */
    public get used() {
        return this._used;
    };
    /**
     * Sets the used property value. Total space used, in bytes. Read-only.
     * @param value Value to set for the used property.
     */
    public set used(value: number | undefined) {
        this._used = value;
    };
}
