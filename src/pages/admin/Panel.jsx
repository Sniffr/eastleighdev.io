import React, {useState} from 'react';

const ListBot = () => {
  const [publish, setPublish] = useState(false);
  let toogle = publish;
  const handleClick = ()=>{
    
    setPublish(!toogle);

  }
  return (
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1 mt-10">
          
          <h1>Admin Panel</h1>
          <div class="text-center">
                <div class="px-4 sm:px-0">
                    <h1 class="text-lg font-medium leading-6 text-gray-900">Vendors Section</h1>
                    <p class="mt-1 text-sm text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                    </p>
                </div>

                <div class="px-5 mt-10 sm:px-2">

                    <div class="mt-1 flex items-start">
                        <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>
                        <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            UserName
                        </button>
                    </div>
                </div>
                <div class="block text-sm mx-2 font-medium text-gray-700">
                    email address
                </div>
            </div>
            <div class=" m-2">

                <div class="p-2">
                    <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
                        <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">My listing</span>
                        <span class="inline-flex px-2">Active Listing: 0</span>
                    </div>
                </div>

                <div class="p-2">
                    <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-sm">
                        <span class="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center text-">Balance</span>
                        <span class="inline-flex px-2">Account balance: $0.0</span>
                    </div>
                </div>

                <div class="p-2">
                    <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
                        <span class="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">Sales</span>
                        <span class="inline-flex px-2">Downloaded bots: 0 </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          
                <> <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-1 md:gap-6">
              <div class="mt-5 md:mt-0 md:col-span-1">
                
                
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-orange-100 sm:p-6">
                      <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label for="first_name" class="block text-sm font-medium text-gray-700">User Name</label>
                          <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label for="last_name" class="block text-sm font-medium text-gray-700">Bot name</label>
                          <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div class="col-span-12 sm:col-span-12">
                          <label for="email_address" class="block text-sm font-medium text-gray-700">Support Email address</label>
                          <input type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                          <select id="category" name="category" autocomplete="category" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                          <label for="street_address" class="block text-sm font-medium text-gray-700">Minimun Stake</label>
                          <input type="text" name="street_address" id="street_address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div >

                        <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                          <label for="city" class="block text-sm font-medium text-gray-700">Martingale</label>
                          <input type="text" name="city" id="city" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                          <label for="city" class="block text-sm font-medium text-gray-700">Bot Price</label>
                          <input type="text" name="city" id="city" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        
                          <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="state" class="block text-sm font-medium text-gray-700">Strike</label>
                            <input type="text" name="state" id="state" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                          </div>

                          <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="postal_code" class="block text-sm font-medium text-gray-700">Target Profit</label>
                            <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 shadow-sm sm:text-sm border-gray-300 rounded-md" />
                          </div>
                        
                      </div>
                    </div>
                  </div>
                
                
              </div>
            </div>
          </div>
          < >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-orange-100 space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label for="company_website" class="block text-sm font-medium text-gray-700">
                      Youtube Video link
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        https://
                      </span>
                      <input type="text" name="company_website" id="company_website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                    </div>
                  </div>
                </div>

                <div>
                  <label for="about" class="block text-sm font-medium text-gray-700">
                    Bot Description
                  </label>
                  <div class="mt-1 ">
                    <textarea id="about" name="about" rows="3" class="shadow-sm bg-emerald-200 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-3/4 sm:text-sm border-gray-300 rounded-md" placeholder="Briefly tell your customer how good is your Bot"></textarea>
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    See how your listing will show on the MarketPlace from the preview section before publishing.
                  </p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Bot photo
                  </label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-blue-700 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    XML Bot file
                  </label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-yellow-900 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12 text-yellow-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a bot</span>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        XML up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </>
          </>
          <div class="px-4 py-3  text-right sm:px-6">
                <button onClick={handleClick} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {publish ? "<< Back": "Preview"}
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default ListBot;