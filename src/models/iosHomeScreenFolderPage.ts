import {createIosHomeScreenAppFromDiscriminatorValue} from './createIosHomeScreenAppFromDiscriminatorValue';
import {IosHomeScreenApp} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * A page for a folder containing apps and web clips on the Home Screen.
 */
export class IosHomeScreenFolderPage implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A list of apps and web clips to appear on a page within a folder. This collection can contain a maximum of 500 elements. */
    private _apps?: IosHomeScreenApp[] | undefined;
    /** Name of the folder page */
    private _displayName?: string | undefined;
    private _odataType?: string | undefined;
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
     * Gets the apps property value. A list of apps and web clips to appear on a page within a folder. This collection can contain a maximum of 500 elements.
     * @returns a iosHomeScreenApp
     */
    public get apps() {
        return this._apps;
    };
    /**
     * Sets the apps property value. A list of apps and web clips to appear on a page within a folder. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the apps property.
     */
    public set apps(value: IosHomeScreenApp[] | undefined) {
        this._apps = value;
    };
    /**
     * Instantiates a new iosHomeScreenFolderPage and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. Name of the folder page
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the folder page
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "apps": n => { this.apps = n.getCollectionOfObjectValues<IosHomeScreenApp>(createIosHomeScreenAppFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<IosHomeScreenApp>("apps", this.apps);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
