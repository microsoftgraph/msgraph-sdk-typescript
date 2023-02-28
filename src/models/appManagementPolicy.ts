import {createAppManagementConfigurationFromDiscriminatorValue} from './createAppManagementConfigurationFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {AppManagementConfiguration, DirectoryObject, PolicyBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppManagementPolicy extends PolicyBase implements Parsable {
    /** The appliesTo property */
    private _appliesTo?: DirectoryObject[] | undefined;
    /** The isEnabled property */
    private _isEnabled?: boolean | undefined;
    /** The restrictions property */
    private _restrictions?: AppManagementConfiguration | undefined;
    /**
     * Gets the appliesTo property value. The appliesTo property
     * @returns a directoryObject
     */
    public get appliesTo() {
        return this._appliesTo;
    };
    /**
     * Sets the appliesTo property value. The appliesTo property
     * @param value Value to set for the appliesTo property.
     */
    public set appliesTo(value: DirectoryObject[] | undefined) {
        this._appliesTo = value;
    };
    /**
     * Instantiates a new AppManagementPolicy and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.appManagementPolicy";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appliesTo": n => { this.appliesTo = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "restrictions": n => { this.restrictions = n.getObjectValue<AppManagementConfiguration>(createAppManagementConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isEnabled property value. The isEnabled property
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. The isEnabled property
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Gets the restrictions property value. The restrictions property
     * @returns a appManagementConfiguration
     */
    public get restrictions() {
        return this._restrictions;
    };
    /**
     * Sets the restrictions property value. The restrictions property
     * @param value Value to set for the restrictions property.
     */
    public set restrictions(value: AppManagementConfiguration | undefined) {
        this._restrictions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DirectoryObject>("appliesTo", this.appliesTo);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeObjectValue<AppManagementConfiguration>("restrictions", this.restrictions);
    };
}
