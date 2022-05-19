import {ManagedMobileApp} from '../../../../../models/';
import {createManagedMobileAppFromDiscriminatorValue} from '../../../../../models/createManagedMobileAppFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the targetApps method. */
export class TargetAppsPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The apps property */
    private _apps?: ManagedMobileApp[] | undefined;
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
     * Gets the apps property value. The apps property
     * @returns a managedMobileApp
     */
    public get apps() {
        return this._apps;
    };
    /**
     * Sets the apps property value. The apps property
     * @param value Value to set for the apps property.
     */
    public set apps(value: ManagedMobileApp[] | undefined) {
        this._apps = value;
    };
    /**
     * Instantiates a new targetAppsPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "apps": n => { this.apps = n.getCollectionOfObjectValues<ManagedMobileApp>(createManagedMobileAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", this.apps);
        writer.writeAdditionalData(this.additionalData);
    };
}
